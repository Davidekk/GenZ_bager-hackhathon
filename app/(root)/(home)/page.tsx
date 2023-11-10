// import Image from "next/image";
import CreateTable from "@/components/shared/responseUI/ResponseTable";
import Modal from "@/components/shared/Modal";


export default function Home() {
  return (
    <>
      <div className="mx-10">
        <div className="flex-between my-5 flex gap-1">
          <Modal data={tableData} />
        </div>
        <CreateTable data={tableData} />
      </div>
    </>


  );
}

const tableData = [
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "country": "USA",
    "occupation": "Engineer",
    "department": "Engineering",
    "salary": 75000,
    "start_date": "2020-05-15",
    "status": "Active",
    "manager": "Sarah Brown",
    "phone": "+1-555-123-4567",
    "address": "123 Main Street, Anytown",
    "city": "Anytown",
    "state": "NY",
    "postal_code": "10001",
    "performance_score": 4.5,
    "education": "Bachelor's Degree",
    "hiring_source": "Referral",
    "emergency_contact": "Mary Doe",
    "emergency_contact_phone": "+1-555-987-6543"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 28,
    "email": "jane@example.com",
    "country": "Canada",
    "occupation": "Designer",
    "department": "Design",
    "salary": 65000,
    "start_date": "2019-11-20",
    "status": "Active",
    "manager": "Michael Johnson",
    "phone": "+1-333-987-6543",
    "address": "456 Elm Street, Pleasantville",
    "city": "Pleasantville",
    "state": "ON",
    "postal_code": "M1N2P3",
    "performance_score": 4.2,
    "education": "Master's Degree",
    "hiring_source": "Online Application",
    "emergency_contact": "David Smith",
    "emergency_contact_phone": "+1-333-567-8901"
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 35,
    "email": "alice@example.com",
    "country": "UK",
    "occupation": "Manager",
    "department": "Management",
    "salary": 85000,
    "start_date": "2018-07-10",
    "status": "Active",
    "manager": "Emily Davis",
    "phone": "+44-20-1234-5678",
    "address": "789 Oak Avenue, Londontown",
    "city": "Londontown",
    "state": "London",
    "postal_code": "SW1A 1AA",
    "performance_score": 4.8,
    "education": "Ph.D.",
    "hiring_source": "Job Fair",
    "emergency_contact": "Robert Johnson",
    "emergency_contact_phone": "+44-20-9876-5432"
  }
]


