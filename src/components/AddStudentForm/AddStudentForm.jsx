import { useState } from 'react';
import { useStudents } from '../../context/StudentContext';

export default function AddStudentForm() {
  const { addStudent } = useStudents();
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    grade: '',
    enrollmentDate: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.course || !formData.grade || !formData.enrollmentDate) {
      setMessage('Please fill in all required fields.');
      setError(true);
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    addStudent(formData);
    setMessage('Student added successfully!');
    setError(false);

    setTimeout(() => setMessage(''), 3000);

    setFormData({
      name: '',
      course: '',
      grade: '',
      enrollmentDate: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success/Error Message */}
      {message && (
        <div className={`p-3 rounded-xl text-center font-semibold mb-4 ${error ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
          {message}
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col space-y-2">
        <label className="font-semibold text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Student Name"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Course */}
      <div className="flex flex-col space-y-2">
        <label className="font-semibold text-gray-700">
          Course <span className="text-red-500">*</span>
        </label>
        <input
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Grade */}
      <div className="flex flex-col space-y-2">
        <label className="font-semibold text-gray-700">
          Grade <span className="text-red-500">*</span>
        </label>
        <input
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          placeholder="Grade"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Enrollment Date */}
      <div className="flex flex-col space-y-2">
        <label className="font-semibold text-gray-700">
          Enrollment Date <span className="text-red-500">*</span>
        </label>
        <input
          name="enrollmentDate"
          type="date"
          value={formData.enrollmentDate}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition w-full font-bold"
      >
        Add Student
      </button>
    </form>
  );
}
