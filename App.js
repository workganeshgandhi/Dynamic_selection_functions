import React, { useState } from 'react';
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';

function updateResults(numberEntry, selectEntry, setResults) {
  let results = [];
  for (let i = 1; i <= numberEntry; i++) {
    if (selectEntry === 'Prime') {
      if (isPrime(i)) {
        results.push(i);
      }
    } else if (selectEntry === 'Odd') {
      if (i % 2 !== 0) {
        results.push(i);
      }
    }
  }
  setResults(results.join(', '));
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export default function App() {
  const [results, setResults] = useState('');
  const [numberEntry, setNumberEntry] = useState('');
  const [selectEntry, setSelectEntry] = useState('Prime');

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Number Checker
      </Typography>
      <TextField
        label="Enter a number"
        type="number"
        fullWidth
        margin="normal"
        value={numberEntry}
        onChange={(e) => setNumberEntry(e.target.value)}
      />
      <TextField
        label="Select type"
        select
        fullWidth
        margin="normal"
        value={selectEntry}
        onChange={(e) => setSelectEntry(e.target.value)}
      >
        <MenuItem value="Prime">Prime</MenuItem>
        <MenuItem value="Odd">Odd</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() =>
          updateResults(parseInt(numberEntry), selectEntry, setResults)
        }
        style={{ marginTop: '16px' }}
      >
        Submit
      </Button>
      {results && (
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          Results: {results}
        </Typography>
      )}
    </Container>
  );
}
