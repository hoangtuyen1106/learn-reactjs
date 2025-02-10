import Accordion from "./components/Accordion.jsx";
import AccordionTitle from "./components/AccordionTitle.jsx";

function App() {
    return (
        <main>
            <section>
                <h2>Why work with us?</h2>
                <Accordion className="accordion">
                    <Accordion.Item className="accordion-item">
                        <Accordion.Title
                            className="accordion-item-title"
                            id="experience"
                        >
                            We got 20 years of experience222222222222222222
                        </Accordion.Title>
                        <Accordion.Content
                            className="accordion-item-content"
                            id="experience"
                        >
                            <article>
                                <p>You can't go wrong with us.</p>
                                <p>
                                    We are in the business of planning highly
                                    indivialized vacation trips for more than 20
                                    years.
                                </p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="accordion-item">
                        <Accordion.Title
                            className="accordion-item-title"
                            id="local-guides"
                        >
                            We are worling with local guides
                        </Accordion.Title>
                        <Accordion.Content
                            className="accordion-item-content"
                            id="local-guides"
                        >
                            <article>
                                <p>You can't go wrong with us.</p>
                                <p>
                                    Instead, we are working with local guides to
                                    ensure a safe and pleasant vacation.
                                </p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </section>
        </main>
    );
}

export default App;
