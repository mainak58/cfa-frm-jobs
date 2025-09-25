"use client";
import React, { useState, useEffect, useRef } from "react";

type Country = {
  code: string;
  label: string;
  phone: string;
  phoneLength?: number | number[];
  suggested?: boolean;
  min?: number;
  max?: number;
};

type PhoneInputProps = {
  countries: Country[];
  name: string;
  onMaxLengthChange?: (maxLength: number) => void;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
  countries,
  name,
  onMaxLengthChange,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries[103]
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getMaxLength = (country: Country) => {
    if (country.phoneLength !== undefined) {
      return Array.isArray(country.phoneLength)
        ? Math.max(...country.phoneLength)
        : country.phoneLength;
    }
    if (country.max !== undefined) return country.max;
    if (country.min !== undefined) return country.min;
    return 10;
  };

  useEffect(() => {
    const maxLength = getMaxLength(selectedCountry);
    if (onMaxLengthChange) onMaxLengthChange(maxLength);
  }, [selectedCountry, onMaxLengthChange]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const maxLength = getMaxLength(selectedCountry);
    if (value.length <= maxLength) setPhoneNumber(value);
  };

  const filteredCountries = countries.filter(
    (c) =>
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-2 items-start relative">
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="border rounded p-2 min-w-[80px] text-left"
        >
          {selectedCountry.phone} ({selectedCountry.code})
        </button>

        {/* Country Code */}
        <input
          type="hidden"
          name={name === "phoneNumber" ? "countryCode" : "whatsappCountryCode"}
          value={selectedCountry.phone}
        />

        {dropdownOpen && (
          <div className="absolute z-10 mt-1 w-64 bg-white border rounded shadow-lg max-h-60 overflow-y-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full p-2 border-b"
            />
            <ul>
              {filteredCountries.map((country) => (
                <li
                  key={country.code}
                  className={`p-2 cursor-pointer ${
                    selectedCountry.code === country.code ? "bg-blue-100" : ""
                  }`}
                  onClick={() => {
                    setSelectedCountry(country);
                    setDropdownOpen(false);
                    setSearch("");
                  }}
                >
                  {country.label} ({country.phone}){" "}
                  {country.suggested ? "⭐" : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Phone input */}
      <input
        type="tel"
        name={name}
        placeholder={`Enter number (max ${getMaxLength(
          selectedCountry
        )} digits)`}
        value={phoneNumber}
        onChange={handlePhoneChange}
        maxLength={getMaxLength(selectedCountry)}
        className="border rounded p-2 flex-1 min-w-[120px]"
      />
    </div>
  );
};

export default PhoneInput;
