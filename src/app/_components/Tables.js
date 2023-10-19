// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Select, SelectItem, Avatar } from "@nextui-org/react";
import { FaOpenid } from "react-icons/fa";
import moment from "moment";
import ReactDOM from 'react-dom/client';
import OtherComp from "./data";

// Defining the columns for the table
const columns = [
  { key: "Date", label: "DATE" },
  { key: "amount", label: "AMOUNT" },
];

// Defining the list of countries
const countries = [
  { name: 'United States',  imageSrc: 'https://flagcdn.com/us.svg' },
  { name: 'United Kingdom', imageSrc: 'https://flagcdn.com/gb.svg' },
  { name: 'Germany', imageSrc: 'https://flagcdn.com/de.svg' },
  { name: 'South Africa', imageSrc: 'https://flagcdn.com/za.svg' },
  { name: 'India', imageSrc: 'https://flagcdn.com/in.svg' },
  { name: 'China', imageSrc: 'https://flagcdn.com/cn.svg' },
  { name: 'Singapore', imageSrc: 'https://flagcdn.com/sg.svg' },
  { name: 'Australia',  imageSrc: 'https://flagcdn.com/au.svg' },
];

// Main component
export default function Tables() {
  // Defining the state variables
  const [formData, setFormData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("Years");
  const [country, setCountry] = useState("");
  const [value, setValue] = useState(0);

  // Function to handle the change in country selection
  const handleSelectionChange = (e) => {
    setCountry(e.target.value);
    setFormData((prevData) => {
      const updatedData = prevData.map((item) => ({
        ...item,
        country: country,
      }));
      return updatedData;
    });
  };

  // Use effect to render the OtherComp component
  useEffect(() => {
    const otherCompRoot = document.getElementById('rightfield');
    if (otherCompRoot) {
      const root = ReactDOM.createRoot(otherCompRoot);
      root.render(<OtherComp formData={formData} />);
      return () => root.unmount();
    }
  }, [formData]);

  // Function to add a new field
  const addField = () => {
    let currentDate = moment().add(formData.length, 'years').format('YYYY');
    setFormData([...formData, { id: formData.length + 1, amount: 0, country: country, date: currentDate, time: statusFilter }]);
  };

  // Function to remove the first field
  const removeFirstField = () => {
    const updatedData = [...formData];
    updatedData.pop();
    setFormData(updatedData);
  };

  // Defining the top content of the table
  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-center">
          <Select
            className="max-w-sm p-2"
            label="Select country"
            disallowEmptySelection
            onChange={handleSelectionChange}
            isRequired
          >
            {countries.map((country) => (
              <SelectItem value={country.name} key={country.name} startContent={<Avatar alt={country.name} className="w-6 h-6" src={country.imageSrc} />}>
                {country.name}
              </SelectItem>
            ))}
          </Select>
          <div className="flex gap-3 pr-2 max-w-sm ">
            <Dropdown>
              <DropdownTrigger className="">
                <Button endContent={<><FaOpenid className="text-small" /></>} variant="flat">
                  {statusFilter}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={true}
                onAction={(key) => {
                  setStatusFilter(key);
                }}
              >
                <DropdownItem key="Years" className="capitalize">
                  Years
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" endContent={<FaOpenid />} onClick={addField}>
              Add New
            </Button>
            <Button disabled={formData.length < 1} color="secondary" endContent={<FaOpenid />} onClick={removeFirstField}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    );
  }, [statusFilter, formData, country]);

  // Rendering the table
  return (
    <>
      <Table topContent={topContent} topContentPlacement="outside" aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={2}>
          {formData.map((data) => (
            <TableRow key="1">
              <TableCell>{data.date}</TableCell>
              <TableCell key={data.id}>
                <Input
                  isRequired
                  type="number"
                  label="Number"
                  variant="bordered"
                  onValueChange={(newValue) => {
                    const sanitizedValue = newValue.replace(/[^1-9]\d*/g, '');
                    setFormData((prevData) => {
                      const updatedData = [...prevData];
                      const itemIndex = updatedData.findIndex((item) => item.id === data.id);
                      if (itemIndex !== -1) {
                        updatedData[itemIndex].amount = sanitizedValue;
                      }
                      if (sanitizedValue > 55) {
                        updatedData[itemIndex].amount = 55;
                      }
                      return updatedData;
                    });
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
