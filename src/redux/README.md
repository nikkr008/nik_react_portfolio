# Redux Implementation for CV Data

This documentation explains how Redux is used to manage the CV URL data in the portfolio website.

## Structure

The Redux implementation consists of:

1. **cvSlice.js**: Contains the Redux slice for CV data with an async thunk for API calls
2. **store.js**: Configures the Redux store with the CV reducer

## How it Works

1. When the Home page loads, it dispatches the `fetchCvUrl` async thunk
2. The thunk makes an API call to fetch the CV URL data
3. Depending on the API response:
   - If successful: The CV URL is stored in Redux state and used for the Download CV button
   - If failed: An alert is shown indicating "We are currently working on it", and the fallback URL from constants.js is used

## API Configuration

The `fetchCvUrl` thunk in `cvSlice.js` is configured to call `https://api.example.com/cv-data`. You should replace this with your actual API endpoint.

Expected API response format:
```json
{
  "cvUrl": "https://example.com/your-cv.pdf"
}
```

## Error Handling

If the API call fails:
1. The error state is updated in Redux
2. An alert is displayed to the user for 5 seconds
3. The Download CV button falls back to using the hardcoded URL from constants.js

## Usage in Components

```jsx
// Import the necessary Redux hooks and thunk
import { useDispatch, useSelector } from 'react-redux';
import { fetchCvUrl } from '../redux/cvSlice';

// Inside your component
const dispatch = useDispatch();
const { cvUrl, status, error } = useSelector((state) => state.cv);

// Dispatch the thunk on component mount
useEffect(() => {
  dispatch(fetchCvUrl());
}, [dispatch]);

// Use the CV URL from Redux, falling back to the constant if needed
const downloadUrl = status === 'succeeded' && cvUrl ? cvUrl : CV_URL;
``` 