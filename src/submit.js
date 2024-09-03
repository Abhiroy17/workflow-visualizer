export const SubmitButton = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="submit" style={{
        backgroundColor: '#C8A2C8', // Slightly darker purple
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Submit
      </button>
    </div>
  );
}