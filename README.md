# Sorting-Algorithms-Visualizer

The Sorting Visualizer project aims to develop a responsive web platform that visually represents various sorting algorithms, including Bubble Sort, Selection Sort, and Merge Sort. The platform will feature a box or bar graph displaying unsorted data that users can sort using different algorithms.


## Key Benefits

- Gain a deeper understanding of sorting algorithms.
- Track the total number of swaps required during sorting.
- Monitor the total number of comparisons made.
- Compare different algorithms side by side.
- Approximate the time taken for sorting (time is used for comparison purposes only).

## Features

- Sort any given array of positive integers consisting of three digits.
- Adjust the speed of execution according to your preference.
- Start, pause, and reset the execution as needed.
- Generate a random array of numbers for sorting.

## Technologies Used

- React with hooks for the user interface.
- Styled components and React Material for CSS styling and pre-built components.
- Zustand, a hooks-based state management library.
- Vite as the bundler.

## Implementation Details

- Animations are implemented using pure CSS and follow the FLIP principle.
- Flex is utilized for array display and manipulation of positions, leveraging the flex order property.
- JavaScript async generators are heavily used to control the execution of algorithms.

## Running the Application Locally

1. Clone the repository: `git clone https://github.com/sadanandpai/sorting-visualizer.git`
2. Navigate to the project directory: `cd sorting-visualizer`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

