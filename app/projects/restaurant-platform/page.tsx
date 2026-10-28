
export default function RestaurantProject() {
  return (
    <main className="case-study">
      <a href="/" className="back-link">
        ← Back to portfolio
      </a>

      <header className="case-hero">
        <p className="eyebrow">PRODUCT CASE STUDY · 2026</p>
        <h1>
          Improving the
          <br />
          <span>restaurant order flow.</span>
        </h1>
        <p className="case-intro">
          A SaaS concept designed to improve coordination
          between waiters and kitchen staff, from order
          creation to preparation and delivery.
        </p>
      </header>

<section className="case-meta">
  <div>
    <span>ROLE</span>
    <p>Product Manager · End-to-end Builder</p>
  </div>
  <div>
    <span>PRODUCT</span>
    <p>Multi-tenant restaurant SaaS</p>
  </div>
  <div>
    <span>CORE FOCUS</span>
    <p>Order workflow & team coordination</p>
  </div>
</section>


      <section className="case-section">
        <p className="eyebrow">01 — THE PROBLEM</p>
        <h2>Disconnected workflows create friction.</h2>
        <p>
          In the initial problem framing, restaurant orders
          may pass through paper notes and informal
          communication. This can make order tracking,
          kitchen coordination, and preparation time
          difficult to manage.
        </p>
      </section>

      
<section className="case-section">
  <p className="eyebrow">02 — THE PRODUCT DECISION</p>
  <h2>Focus on the highest-friction workflow first.</h2>
  <p>
    Instead of attempting to digitize every restaurant
    operation at once, I scoped the first version around
    the journey from order creation to kitchen preparation
    and delivery status tracking.
  </p>
  <p>
    This kept the MVP focused on improving operational
    visibility and coordination, while leaving payments
    and more advanced restaurant management capabilities
    outside the initial scope.
  </p>

  <div className="workflow">
    <div>
      01
      <strong>Order created</strong>
    </div>
    <div>
      02
      <strong>In preparation</strong>
    </div>
    <div>
      03
      <strong>Ready / completed</strong>
    </div>
    <div>
      04
      <strong>Delivery status recorded</strong>
    </div>
  </div>
</section>


<section className="case-section">
  <p className="eyebrow">03 — WHAT I BUILT</p>
  <h2>From product scope to a working prototype.</h2>
  <p>
    I translated the product scope into a role-based
    application with separate workflows for restaurant
    managers, waiters, and kitchen staff.
  </p>

  <ul className="feature-list">
    <li>Restaurant and branch management</li>
    <li>Branch-specific menu management</li>
    <li>Waiter order creation and active order tracking</li>
    <li>Kitchen preparation and completion status updates</li>
    <li>Recording delivery status</li>
    <li>Reporting on order duration through final status</li>
    <li>Role-based access mapped to restaurant branches</li>
  </ul>
</section>


      <section className="case-section">
        <p className="eyebrow">04 — LEARNINGS & NEXT STEPS</p>
        <h2>Build, validate, and improve.</h2>
        <p>
          The next step is to validate the workflow with
          restaurant owners, waiters, and kitchen staff,
          then use their feedback to prioritize improvements.
        </p>
      </section>

      <footer className="case-footer">
        <a href="/">← Back to all projects</a>
      </footer>
    </main>
  );
}
