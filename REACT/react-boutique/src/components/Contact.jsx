// ── Composant Contact ──
import { useState } from 'react'

function Contact() {
  const [form, setForm]   = useState({ nom: '', email: '', message: '' })
  const [envoye, setEnvoye] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnvoye(true)
    setTimeout(() => setEnvoye(false), 3000)
    setForm({ nom: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <h2 className="section-titre">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-groupe">
          <label>Nom</label>
          <input
            name="nom"
            placeholder="Ton nom"
            value={form.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupe">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="ton@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupe">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Ton message…"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
        {envoye && (
          <p className="contact-succes">✅ Message envoyé !</p>
        )}
      </form>
    </section>
  )
}

export default Contact
