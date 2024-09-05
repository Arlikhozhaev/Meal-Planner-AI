'use client'
export function Page() {
    async function onSubmit(event) {
      event.preventDefault()
   
      const formData = new FormData(event.target)
      const response = await fetch('/api/test', {
        method: 'POST',
        body: formData,
      })
   
      // Handle response if necessary
      //const data = await response.json()
      // ...
    }
   
    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    )
  }

  export default Page