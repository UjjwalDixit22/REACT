import './App.css'
function App() {
  return (
    <div>
      {/* Buttons */}
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
      <br/>
      <br/>
{/* Badges */}
      <button type="button" class="btn btn-primary position-relative">
      Inbox
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+
      <span class="visually-hidden">unread messages</span>
  </span>
</button>

    </div>
  )
}

export default App
