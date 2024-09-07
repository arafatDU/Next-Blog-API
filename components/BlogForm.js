// components/BlogForm.js
export default function BlogForm({ form, setForm, categories, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        placeholder="Blog Title" 
        value={form.title} 
        onChange={(e) => setForm({ ...form, title: e.target.value })} 
      />
      <textarea 
        name="description" 
        placeholder="Blog Description" 
        value={form.description} 
        onChange={(e) => setForm({ ...form, description: e.target.value })} 
      />
      <select name="categoryId" value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
