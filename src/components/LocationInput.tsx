import React from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface LocationInputProps {
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: 'text' | 'select';
  options?: string[];
}

export default function LocationInput({
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = 'text',
  options = []
}: LocationInputProps) {
  const baseClasses = "w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-900 text-white border-gray-700 focus:ring-2 focus:ring-white/20 focus:border-transparent placeholder-gray-500";

  if (type === 'select') {
    return (
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(baseClasses, "appearance-none")}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-gray-900">{option}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={baseClasses}
      />
    </div>
  );
}