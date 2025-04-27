import { useStudents } from '../../context/StudentContext';
import { useState } from 'react';

export default function StudentTable() {
  const { students, deleteStudent } = useStudents(); // <-- Import deleteStudent
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');

  function handleSort(column) {
    setSortBy(column);
  }

  const filteredStudents = students
    .filter(student =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortBy] && b[sortBy]) {
        return a[sortBy].localeCompare(b[sortBy]);
      }
      return 0;
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Name or ID"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-left table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-gray-700 uppercase text-sm tracking-wider">
              <th className="p-4 cursor-pointer" onClick={() => handleSort('id')}>ID</th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('name')}>Name</th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('course')}>Course</th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('grade')}>Grade</th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('enrollmentDate')}>Enrollment Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-400">
                  No students found
                </td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{student.id}</td>
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.course}</td>
                  <td className="p-4">{student.grade}</td>
                  <td className="p-4">{student.enrollmentDate}</td>
                  <td className="p-4">
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this student?')) {
                        deleteStudent(student.id);
                      }
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-full transition"
                  >
                    Delete
                  </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
