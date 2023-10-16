import React,{useState} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Select, SelectItem, Avatar} from "@nextui-org/react";
import { FaOpenid } from "react-icons/fa";
import moment from "moment";
import OtherComp from "./data";

const columns = [
  {
    key: "Date",
    label: "DATE",
  },
  {
    key: "amount",
    label: "AMOUNT",
  },
 
];

// to better store since its only a few nations
const countries = [
  { name: 'United States',  imageSrc: 'https://flagcdn.com/us.svg' },
  { name: 'United Kingdom', imageSrc: 'https://flagcdn.com/gb.svg' },
  { name: 'Germany', imageSrc: 'https://flagcdn.com/de.svg' },
  { name: 'South Africa', imageSrc: 'https://flagcdn.com/za.svg' },
  { name: 'India', imageSrc: 'https://flagcdn.com/in.svg' },
  { name: 'China', imageSrc: 'https://flagcdn.com/cn.svg' },
  { name: 'Singapore',imageSrc: 'https://flagcdn.com/sg.svg' },
  { name: 'Australia',  imageSrc: 'https://flagcdn.com/au.svg' }, // Change the value to the actual value
];

export default function Tables(){
  const [formData, setFormData] = useState([
    
  ]);
  const [statusFilter,setStatusFilter] = useState("Months")
  const [country, setCountry] = React.useState(new Set([]));
  const [value, setValue] = useState('');
  const handleSelectionChange = (e) => {
    setCountry(new Set([e.target.value]));
  
  };
  console.log(country)
 
  const addField = () => {
    let currentDate;
    if (statusFilter === "Months") {
      currentDate = moment().add(formData.length, 'months').format('MMM YYYY');
    } else if (statusFilter === "Years") {
    currentDate = moment().add(formData.length, 'years').format('YYYY');
    
    }
    console.log(formData)
    setFormData([...formData, { id: formData.length + 1, amount: value, email: '', date: currentDate }]);
  };

  const removeFirstField = () => {
    const updatedData = [...formData]; // Create a copy of the formData array
    updatedData.pop(); // Remove the first item
    setFormData(updatedData); // Update the state
  };

  const isInvalid = React.useMemo(() => {
    // Check if the value is empty or not a valid positive number
    return value === '' || !/^[1-9]\d*$/.test(value) || /\D/.test(value);
  }, [value]);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-center">
        <Select
      className="max-w-xs p-2"
      label="Select country"
      selectedKeys={country}
      disallowEmptySelection
      onChange={handleSelectionChange}
      isRequired
    >
       {countries.map((country) => (
        <SelectItem value={country.name} key={country.name}  startContent={<Avatar alt={country.name} className="w-6 h-6" src={country.imageSrc} />}>
        {country.name}
        </SelectItem>
      ))}
    </Select>
          <div className="flex gap-3 pr-2">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                
                <Button endContent={<><FaOpenid className="text-small" /></>} variant="flat">
                 {statusFilter}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
      disallowEmptySelection
      aria-label="Table Columns"
      closeOnSelect={true}
      onAction={(key) => {
        setStatusFilter(key); // Set the status filter
        setFormData([]); // Clear the formData array
      }}// Set the status filter based on the selected key
    >
      <DropdownItem key="Months" className="capitalize">
        Months
      </DropdownItem>
      <DropdownItem key="Years" className="capitalize">
        Years
      </DropdownItem>
    </DropdownMenu>
            </Dropdown>
            <Button color="primary" disabled={isInvalid && formData.length !== 0 } endContent={<FaOpenid />} onClick={addField}>
              Add New
            </Button>
            <Button disabled={formData.length<1} color="secondary" endContent={<FaOpenid />} onClick={removeFirstField}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    );
  });
  
  return (
   <>
   <OtherComp formData={formData} />
      <Table topContent={topContent}
      topContentPlacement="outside" aria-label="Example table with dynamic content">
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
                     color={isInvalid ? 'danger' : 'primary'}
                     errorMessage={isInvalid ? 'Please enter a valid positive number' : ''}
                     onValueChange={(newValue) => {
                      const sanitizedValue = newValue.replace(/[^1-9]\d*/g, ''); // Remove non-numeric characters and leading zeros
                      setValue(sanitizedValue);
                      
                      // Update the formData array
                      setFormData((prevData) => {

                        const updatedData = [...prevData];
                        const itemIndex = updatedData.findIndex((item) => item.id === data.id);
                        if (itemIndex !== -1) {
                          updatedData[itemIndex].amount = sanitizedValue;
                        }
                        console.log(formData)
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
    )
  
}

