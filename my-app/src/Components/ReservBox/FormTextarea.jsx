import { useState } from "react";

export const FormTextarea = () => {
  const [form, setForm] = useState("");

  const handleForm = e => {
    setForm(e.target.value);
  };

 
  return(
    <form>
      <label htmlFor="comment">補足情報</label><br/>
      <textarea name="comment" id="comment" cols={50} rows={9} value={form}
      onChange={handleForm}></textarea><br/>
    </form>
  )
};

