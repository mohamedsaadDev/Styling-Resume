import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const PdfViewer = () => (
  <>
  <div
      className="overflow-y-auto overflow-x-hidden flex flex-col border border-gray-100 rounded shadow-md bg-white p-2"
      style={{
        position: 'fixed',
        // visibility: 'visible',
        left: '0.83px',
        top: '0.667px',
        height: '358.667px',
        minWidth: '373.3333px',
      }}
    >
      <div>
        <div
          className="h-48 relative"
          style={{ cursor: 'grab', touchAction: 'none' }}
        >
          <div
            className="absolute top-0 start-0 end-0 bottom-0 rounded"
            style={{ backgroundColor: 'rgb(255, 36, 0)' }}
          ></div>
          <div
            className="absolute top-0 start-0 end-0 bottom-0 rounded"
            style={{
              background: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          ></div>
          <div
            className="absolute top-0 start-0 end-0 bottom-0 rounded"
            style={{
              background: 'linear-gradient(transparent 0%, rgb(0, 0, 0) 100%)',
            }}
          ></div>
          <div
            className="z-10 w-5 h-5 shadow border-2 border-white absolute rounded-full transform-gpu -translate-x-1/2 -translate-y-1/2"
            style={{
              left: '70.4698%',
              top: '41.5686%',
              backgroundColor: 'rgb(149, 59, 44)',
            }}
          ></div>
        </div>
        <div className="my-5">
          <div
            className="h-2 relative rounded-lg"
            style={{
              cursor: 'grab',
              touchAction: 'none',
              background: 'linear-gradient(to left, rgb(255, 0, 0) 0%, rgb(255, 0, 153) 10%, rgb(205, 0, 255) 20%, rgb(50, 0, 255) 30%, rgb(0, 102, 255) 40%, rgb(0, 255, 253) 50%, rgb(0, 255, 102) 60%, rgb(53, 255, 0) 70%, rgb(205, 255, 0) 80%, rgb(255, 153, 0) 90%, rgb(255, 0, 0) 100%)',
            }}
          >
            <div
              className="z-10 w-5 h-5 shadow border-2 border-white absolute rounded-full transform-gpu -translate-y-1/2 -translate-x-1/2"
              style={{
                left: '2.38095%',
                top: '50%',
                backgroundColor: 'rgb(255, 36, 0)',
              }}
            ></div>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-between">
            <button
              type="button"
              className="relative me-2 w-12 h-8 sm:w-8 last:me-0 overflow-hidden rounded border focus-visible:ring-4 ring-brand hover:border-brand-400 border-transparent"
              style={{ backgroundColor: 'rgb(149, 59, 44)' }}
            >
              <div className="sr-only">Choose #953b2c</div>
              <div className="absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 bg-black h-5 w-5 flex justify-center items-center"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 opacity-75 text-white h-4 w-4"
              >
                <path
                  fill="currentColor"
                  d="m382-339.384 345.539-345.538q8.923-8.923 21.192-9.116t21.576 9.116q9.308 9.307 9.308 21.384t-9.308 21.384l-363 362.999Q396.461-268.309 382-268.309t-25.307-10.846l-167-166.999q-8.923-8.923-8.808-21.192t9.423-21.576 21.384-9.308 21.384 9.308z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="relative me-2 w-12 h-8 sm:w-8 last:me-0 overflow-hidden rounded border focus-visible:ring-4 ring-brand hover:border-brand-400 border-transparent"
              style={{ backgroundColor: 'rgb(47, 113, 160)' }}
            >
              <div className="sr-only">Choose #2f71a0</div>
            </button>
            <button
              type="button"
              className="relative me-2 w-12 h-8 sm:w-8 last:me-0 overflow-hidden rounded border focus-visible:ring-4 ring-brand hover:border-brand-400 border-transparent"
              style={{ backgroundColor: 'rgb(111, 170, 138)' }}
            >
              <div className="sr-only">Choose #6faa8a</div>
            </button>
            <button
              type="button"
              className="relative me-2 w-12 h-8 sm:w-8 last:me-0 overflow-hidden rounded border focus-visible:ring-4 ring-brand hover:border-brand-400 border-transparent"
              style={{ backgroundColor: 'rgb(182, 157, 150)' }}
            >
              <div className="sr-only">Choose #b69d96</div>
            </button>
            <button
              type="button"
              className="relative me-2 w-12 h-8 sm:w-8 last:me-0 overflow-hidden rounded border focus-visible:ring-4 ring-brand hover:border-brand-400 border-transparent"
              style={{ backgroundColor: 'rgb(130, 130, 130)' }}
            >
              <div className="sr-only">Choose #828282</div>
            </button>
            <button
              type="button"
              className="relative me-2 w-12 h-8 sm:w-8 last:me-0 overflow-hidden rounded border focus-visible:ring-4 ring-brand hover:border-brand-400 border-transparent"
              style={{ backgroundColor: 'rgb(48, 56, 70)' }}
            >
              <div className="sr-only">Choose #303846</div>
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100">
            <input
              id=":ri:"
              data-s="input"
              type="text"
              size="1"
              className="flex-1 appearance-none outline-none ltr py-2 ps-3 text-base pe-3 bg-transparent"
              value="#953b2c"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PdfViewer;
