// components/CategoryForm.js
export default function CategoryForm({ form, setForm, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        placeholder="Category Title" 
        value={form.title} 
        onChange={(e) => setForm({ ...form, title: e.target.value })} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
