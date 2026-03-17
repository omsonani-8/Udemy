import React, { useState } from "react";

const   CreateCourse = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">

        {/* Step Indicator */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-sm font-bold ${
                step >= num ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 1: Course Info</h2>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              placeholder="Course Title"
            />
            <textarea
              rows={3}
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
              placeholder="Course Description"
            ></textarea>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 2: Category & Thumbnail</h2>
            <select className="w-full mb-4 p-2 border border-gray-300 rounded-md">
              <option>Select Category</option>
              <option>Web</option>
              <option>Data</option>
              <option>Design</option>
            </select>
            <input type="file" className="w-full mb-4" />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 3: Confirm & Submit</h2>
            <p>Review your information and submit the course.</p>
            {/* You can show summary here */}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-4 py-2 rounded ${
              step === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 text-white"
            }`}
          >
            Back
          </button>
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Submitted!")}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
