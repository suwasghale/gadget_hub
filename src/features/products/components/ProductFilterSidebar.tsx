import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  X, 
  Filter, 
  Search,
  RefreshCw,
  Check
} from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterSection {
  id: string;
  title: string;
  type: 'checkbox' | 'radio' | 'range' | 'buttons';
  options?: FilterOption[];
  isExpanded?: boolean;
}

interface FilterState {
  [key: string]: string[] | string | number[];
}

const ProductFilterSidebar = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchTerms, setSearchTerms] = useState<{[key: string]: string}>({});
  const [filters, setFilters] = useState<FilterState>({
    price: [32999, 627900],
    brands: [],
    laptopSeries: [],
    laptopType: [],
    processorSeries: [],
    processor: [],
    graphicsSeries: [],
    graphicsCard: [],
    graphicsMemory: [],
    displaySize: [],
    displayResolution: [],
    displayPanel: [],
    refreshRate: [],
    ram: [],
    ramType: [],
    ramFrequency: [],
    ssd: [],
    warranty: '2 Year',
    fingerprint: [],
    isNewArrival: []
  });

  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    price: true,
    brands: true,
    laptopSeries: false,
    laptopType: false,
    processorSeries: false,
    processor: false,
    graphicsSeries: false,
    graphicsCard: false,
    graphicsMemory: false,
    displaySize: false,
    displayResolution: false,
    displayPanel: false,
    refreshRate: false,
    ram: false,
    ramType: false,
    ramFrequency: false,
    ssd: false,
    warranty: true,
    fingerprint: false,
    isNewArrival: false
  });

  const filterSections: FilterSection[] = [
    {
      id: 'price',
      title: 'Price',
      type: 'range'
    },
    {
      id: 'brands',
      title: 'Brands',
      type: 'checkbox',
      options: [
        { id: 'acer', label: 'Acer', count: 45 },
        { id: 'asus', label: 'ASUS', count: 38 },
        { id: 'hp', label: 'HP', count: 52 },
        { id: 'dell', label: 'Dell', count: 41 },
        { id: 'lenovo', label: 'Lenovo', count: 47 },
        { id: 'msi', label: 'MSI', count: 23 },
        { id: 'apple', label: 'Apple', count: 15 }
      ]
    },
    {
      id: 'laptopSeries',
      title: 'Laptop Series',
      type: 'checkbox',
      options: [
        { id: 'gaming', label: 'Gaming Series', count: 67 },
        { id: 'business', label: 'Business Series', count: 45 },
        { id: 'ultrabook', label: 'Ultrabook', count: 32 },
        { id: 'workstation', label: 'Workstation', count: 18 }
      ]
    },
    {
      id: 'laptopType',
      title: 'Laptop Type',
      type: 'checkbox',
      options: [
        { id: 'gaming', label: 'Gaming', count: 89 },
        { id: 'business', label: 'Business', count: 67 },
        { id: 'student', label: 'Student', count: 54 },
        { id: 'creative', label: 'Creative', count: 32 }
      ]
    },
    {
      id: 'processorSeries',
      title: 'Processor Series',
      type: 'checkbox',
      options: [
        { id: 'intel-i3', label: 'Intel Core i3', count: 34 },
        { id: 'intel-i5', label: 'Intel Core i5', count: 78 },
        { id: 'intel-i7', label: 'Intel Core i7', count: 65 },
        { id: 'intel-i9', label: 'Intel Core i9', count: 23 },
        { id: 'amd-ryzen5', label: 'AMD Ryzen 5', count: 45 },
        { id: 'amd-ryzen7', label: 'AMD Ryzen 7', count: 38 }
      ]
    },
    {
      id: 'processor',
      title: 'Processor',
      type: 'checkbox',
      options: [
        { id: '12th-gen', label: '12th Generation', count: 89 },
        { id: '13th-gen', label: '13th Generation', count: 67 },
        { id: '11th-gen', label: '11th Generation', count: 45 }
      ]
    },
    {
      id: 'graphicsSeries',
      title: 'Graphics Series',
      type: 'checkbox',
      options: [
        { id: 'rtx-40', label: 'RTX 40 Series', count: 34 },
        { id: 'rtx-30', label: 'RTX 30 Series', count: 56 },
        { id: 'gtx-16', label: 'GTX 16 Series', count: 23 },
        { id: 'integrated', label: 'Integrated', count: 78 }
      ]
    },
    {
      id: 'graphicsCard',
      title: 'Graphics Card',
      type: 'checkbox',
      options: [
        { id: 'rtx-4050', label: 'RTX 4050', count: 23 },
        { id: 'rtx-4060', label: 'RTX 4060', count: 34 },
        { id: 'rtx-3050', label: 'RTX 3050', count: 45 },
        { id: 'intel-iris', label: 'Intel Iris Xe', count: 67 }
      ]
    },
    {
      id: 'graphicsMemory',
      title: 'Graphics Memory',
      type: 'checkbox',
      options: [
        { id: '4gb', label: '4GB', count: 45 },
        { id: '6gb', label: '6GB', count: 34 },
        { id: '8gb', label: '8GB', count: 23 },
        { id: 'shared', label: 'Shared', count: 78 }
      ]
    },
    {
      id: 'displaySize',
      title: 'Display Size',
      type: 'checkbox',
      options: [
        { id: '13-inch', label: '13 inch', count: 23 },
        { id: '14-inch', label: '14 inch', count: 45 },
        { id: '15-inch', label: '15 inch', count: 67 },
        { id: '16-inch', label: '16 inch', count: 34 },
        { id: '17-inch', label: '17 inch', count: 19 }
      ]
    },
    {
      id: 'displayResolution',
      title: 'Display Resolution',
      type: 'checkbox',
      options: [
        { id: 'fhd', label: 'Full HD (1920x1080)', count: 89 },
        { id: 'wuxga', label: 'WUXGA (1920x1200)', count: 34 },
        { id: '2k', label: '2K (2560x1440)', count: 23 },
        { id: '4k', label: '4K (3840x2160)', count: 12 }
      ]
    },
    {
      id: 'displayPanel',
      title: 'Display Panel',
      type: 'checkbox',
      options: [
        { id: 'ips', label: 'IPS', count: 78 },
        { id: 'oled', label: 'OLED', count: 23 },
        { id: 'tn', label: 'TN', count: 34 },
        { id: 'va', label: 'VA', count: 19 }
      ]
    },
    {
      id: 'refreshRate',
      title: 'Refresh Rate',
      type: 'checkbox',
      options: [
        { id: '60hz', label: '60Hz', count: 89 },
        { id: '120hz', label: '120Hz', count: 45 },
        { id: '144hz', label: '144Hz', count: 34 },
        { id: '165hz', label: '165Hz', count: 23 }
      ]
    },
    {
      id: 'ram',
      title: 'RAM',
      type: 'checkbox',
      options: [
        { id: '8gb', label: '8GB', count: 67 },
        { id: '16gb', label: '16GB', count: 78 },
        { id: '32gb', label: '32GB', count: 23 },
        { id: '64gb', label: '64GB', count: 8 }
      ]
    },
    {
      id: 'ramType',
      title: 'RAM Type',
      type: 'checkbox',
      options: [
        { id: 'ddr4', label: 'DDR4', count: 89 },
        { id: 'ddr5', label: 'DDR5', count: 67 }
      ]
    },
    {
      id: 'ramFrequency',
      title: 'RAM Frequency',
      type: 'checkbox',
      options: [
        { id: '2400mhz', label: '2400MHz', count: 34 },
        { id: '2666mhz', label: '2666MHz', count: 45 },
        { id: '3200mhz', label: '3200MHz', count: 56 },
        { id: '4800mhz', label: '4800MHz', count: 23 }
      ]
    },
    {
      id: 'ssd',
      title: 'SSD',
      type: 'checkbox',
      options: [
        { id: '256gb', label: '256GB', count: 45 },
        { id: '512gb', label: '512GB', count: 78 },
        { id: '1tb', label: '1TB', count: 56 },
        { id: '2tb', label: '2TB', count: 23 }
      ]
    },
    {
      id: 'warranty',
      title: 'Warranty',
      type: 'buttons'
    },
    {
      id: 'fingerprint',
      title: 'Fingerprint',
      type: 'checkbox',
      options: [
        { id: 'yes', label: 'Yes', count: 89 },
        { id: 'no', label: 'No', count: 67 }
      ]
    },
    {
      id: 'isNewArrival',
      title: 'Is New Arrival?',
      type: 'checkbox',
      options: [
        { id: 'yes', label: 'Yes', count: 34 },
        { id: 'no', label: 'No', count: 122 }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleFilterChange = (sectionId: string, optionId: string, isChecked: boolean) => {
    setFilters(prev => {
      const currentFilters = prev[sectionId] as string[];
      if (isChecked) {
        return {
          ...prev,
          [sectionId]: [...currentFilters, optionId]
        };
      } else {
        return {
          ...prev,
          [sectionId]: currentFilters.filter(id => id !== optionId)
        };
      }
    });
  };

  const handleWarrantyChange = (warranty: string) => {
    setFilters(prev => ({ ...prev, warranty }));
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilters(prev => ({ ...prev, price: [min, max] }));
  };

  const clearAllFilters = () => {
    setFilters({
      price: [32999, 627900],
      brands: [],
      laptopSeries: [],
      laptopType: [],
      processorSeries: [],
      processor: [],
      graphicsSeries: [],
      graphicsCard: [],
      graphicsMemory: [],
      displaySize: [],
      displayResolution: [],
      displayPanel: [],
      refreshRate: [],
      ram: [],
      ramType: [],
      ramFrequency: [],
      ssd: [],
      warranty: '2 Year',
      fingerprint: [],
      isNewArrival: []
    });
    setSearchTerms({});
  };

  const filteredOptions = (sectionId: string, options: FilterOption[]) => {
    const searchTerm = searchTerms[sectionId]?.toLowerCase() || '';
    return options.filter(option => 
      option.label.toLowerCase().includes(searchTerm)
    );
  };

  const renderFilterSection = (section: FilterSection) => {
    const isExpanded = expandedSections[section.id];

    return (
      <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <button
          onClick={() => toggleSection(section.id)}
          className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
        >
          <h3 className="font-semibold text-gray-900">{section.title}</h3>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          )}
        </button>

        {isExpanded && (
          <div className="p-4">
            {section.type === 'range' && section.id === 'price' && (
              <div className="space-y-4">
                <div className="px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg h-2 relative">
                  <div className="absolute inset-0 bg-red-700 rounded-lg w-3/4"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    value={32999}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">—</span>
                  <input
                    type="number"
                    value={627900}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Max"
                  />
                  <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
                    OK
                  </button>
                </div>
              </div>
            )}

            {section.type === 'buttons' && section.id === 'warranty' && (
              <div className="flex flex-wrap gap-2">
                {['1 Year', '2 Year', '3 Years'].map((warranty) => (
                  <button
                    key={warranty}
                    onClick={() => handleWarrantyChange(warranty)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                      filters.warranty === warranty
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {warranty}
                  </button>
                ))}
              </div>
            )}

            {section.type === 'checkbox' && section.options && (
              <div className="space-y-3">
                {section.options.length > 5 && (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder={`Search ${section.title.toLowerCase()}...`}
                      value={searchTerms[section.id] || ''}
                      onChange={(e) => setSearchTerms(prev => ({ ...prev, [section.id]: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    />
                  </div>
                )}

                <div className={`space-y-2 ${section.options.length > 8 ? 'max-h-48 overflow-y-auto' : ''} custom-scrollbar`}>
                  {filteredOptions(section.id, section.options).map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={(filters[section.id] as string[]).includes(option.id)}
                            onChange={(e) => handleFilterChange(section.id, option.id, e.target.checked)}
                            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                          />
                          {(filters[section.id] as string[]).includes(option.id) && (
                            <Check className="absolute inset-0 w-3 h-3 text-white m-0.5 pointer-events-none" />
                          )}
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {option.label}
                        </span>
                      </div>
                      {option.count && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {option.count}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors duration-200"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 h-fit sticky top-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Filters</h2>
              <button
                onClick={clearAllFilters}
                className="flex items-center space-x-1 text-red-100 hover:text-white transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm">Clear All</span>
              </button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="p-4 space-y-4">
            {filterSections.map(renderFilterSection)}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white h-full w-full max-w-sm ml-auto flex flex-col">
            {/* Mobile Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Filters</h2>
              <div className="flex items-center space-x-3">
                <button
                  onClick={clearAllFilters}
                  className="flex items-center space-x-1 text-red-100 hover:text-white transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm">Clear</span>
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-red-100 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Filter Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {filterSections.map(renderFilterSection)}
            </div>

            {/* Mobile Apply Button */}
            <div className="border-t border-gray-200 p-4">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </>
  );
};
export default ProductFilterSidebar;