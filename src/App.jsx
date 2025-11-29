import React, { useState } from 'react'
import { FaBalanceScale, FaFileContract, FaHandshake, FaUserMd, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Store lead data in localStorage for now (can be upgraded to backend later)
    const leads = JSON.parse(localStorage.getItem('leads') || '[]')
    leads.push({
      ...formData,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('leads', JSON.stringify(leads))

    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', message: '' })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <FaBalanceScale style={{ display: 'inline', marginLeft: '0.5rem' }} />
              משרד עורכי דין - דיני נכות
            </div>
            <nav>
              <ul className="nav">
                <li><a href="#services">שירותים</a></li>
                <li><a href="#about">אודות</a></li>
                <li><a href="#contact">צור קשר</a></li>
              </ul>
            </nav>
            <button className="cta-button" onClick={scrollToContact}>
              ייעוץ חינם
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>ייצוג משפטי מקצועי בתביעות נכות</h1>
          <p>משרד עורכי דין המתמחה בדיני נכות בטבריה - נלחם עבור זכויותיך</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={scrollToContact}>
              קבע פגישת ייעוץ חינם
            </button>
            <button className="secondary-button" onClick={() => window.location.href='tel:+972-50-000-0000'}>
              התקשר עכשיו
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">השירותים שלנו</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaFileContract />
              </div>
              <h3>תביעות נכות מביטוח לאומי</h3>
              <p>
                ליווי מלא בהגשת תביעות נכות, ערעורים וטיפול בכל שלבי התהליך מול המוסד לביטוח לאומי.
                אנו מבטיחים ייצוג מקצועי להשגת זכויותיך המלאות.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaUserMd />
              </div>
              <h3>ייצוג בוועדות רפואיות</h3>
              <p>
                ליווי והכנה לקראת וועדות רפואיות, כולל הכנת מסמכים רפואיים, ייצוג בדיון
                ומענה לכל שאלה. ניסיון רב בהשגת תוצאות אופטימליות.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaHandshake />
              </div>
              <h3>ייעוץ משפטי אישי</h3>
              <p>
                ייעוץ מקצועי ומותאם אישית לכל מקרה. בדיקת זכאות, הערכת סיכויים ובניית
                אסטרטגיה משפטית מיטבית להשגת התוצאה הטובה ביותר.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaBalanceScale />
              </div>
              <h3>ערעורים ותביעות משפטיות</h3>
              <p>
                הגשת ערעורים לבית הדין לעבודה, ייצוג בהליכים משפטיים ותביעות נגד
                גורמים ביטוחיים. מחויבות מלאה להשגת הצדק עבורך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>למה לבחור בנו?</h2>
              <p>
                משרדנו מתמחה בדיני נכות ומעניק שירות משפטי מקצועי ואישי לתושבי טבריה והסביבה.
                אנו מבינים את המורכבות של תביעות נכות ומחויבים להשיג עבורך את התוצאה הטובה ביותר.
              </p>
              <p>
                עם שנות ניסיון רבות בתחום, אנו מכירים לעומק את המערכת הביטוחית והמשפטית
                ויודעים כיצד לנווט בה בצורה האפקטיבית ביותר. הצוות שלנו מספק ליווי צמוד
                ומקצועי בכל שלב.
              </p>
              <p>
                <strong>ייעוץ ראשוני חינם</strong> - נשמח לשמוע את הסיפור שלך ולהציע לך
                פתרון משפטי מותאם אישית.
              </p>
            </div>
            <div className="stats">
              <div className="stat-card">
                <span className="stat-number">500+</span>
                <span className="stat-label">תיקים שטופלו בהצלחה</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">שנות ניסיון</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">95%</span>
                <span className="stat-label">שיעור הצלחה</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">זמינות לשאלות</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">צור קשר</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>נשמח לעמוד לרשותך</h3>
              <p>
                השאר פרטים ונחזור אליך בהקדם האפשרי לתיאום פגישת ייעוץ ראשונית ללא עלות.
                אנו זמינים לכל שאלה ושמחים לסייע.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <FaPhone className="contact-item-icon" />
                  <div>
                    <strong>טלפון:</strong><br />
                    050-000-0000
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-item-icon" />
                  <div>
                    <strong>אימייל:</strong><br />
                    office@disability-law.co.il
                  </div>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-item-icon" />
                  <div>
                    <strong>כתובת:</strong><br />
                    רחוב הגליל 15, טבריה
                  </div>
                </div>
                <div className="contact-item">
                  <FaClock className="contact-item-icon" />
                  <div>
                    <strong>שעות פעילות:</strong><br />
                    ראשון-חמישי: 9:00-18:00
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="success-message">
                  תודה! פנייתך התקבלה ונחזור אליך בהקדם האפשרי
                </div>
              )}
              <div className="form-group">
                <label htmlFor="name">שם מלא *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="הזן את שמך המלא"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">טלפון *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="050-000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">תיאור המקרה *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="נא לתאר בקצרה את המקרה שלך..."
                />
              </div>
              <button type="submit" className="submit-button">
                שלח פנייה
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 משרד עורכי דין - דיני נכות | כל הזכויות שמורות</p>
          <p>טבריה, ישראל | office@disability-law.co.il | 050-000-0000</p>
        </div>
      </footer>
    </div>
  )
}

export default App
