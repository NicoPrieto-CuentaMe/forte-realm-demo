// @chunk {"steps": ["setup"]}
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.forte.net/v3';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`
};
// @chunk-end

// @chunk {"steps": ["payload"]}
const payload = {
  amount: 100.00,
  card_number: '4111111111111111',
  expiration_date: '12/26',
  cvv: '123',
  currency: 'USD'
};
// @chunk-end

// @chunk {"steps": ["request"]}
async function createTransaction(payload) {
  const response = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  });
// @chunk-end

// @chunk {"steps": ["response"]}
  const data = await response.json();

  if (response.ok) {
    console.log('Transaction approved:', data.transaction_id);
  } else {
    console.error('Transaction failed:', data.message);
  }

  return data;
}
// @chunk-end
