import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const CollapseExample = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const [isOpen2, setIsOpen2] = useState(false);

    const toggle2 = () => setIsOpen2(!isOpen2);

    const [isOpen3, setIsOpen3] = useState(false);

    const toggle3 = () => setIsOpen3(!isOpen3);

    return (
        <div className="about-us-right-collapse">
            <div className="about-us-right-collapse-item mb-3">
                <Button onClick={toggle} className="d-flex align-items-center">Front End
                <span className="mr-auto">
                    </span>
                    {
                        isOpen ? <i className="fas fa-angle-down arrow-icon"></i> : <i className="fas fa-angle-right arrow-icon"></i>
                    }

                </Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                             enim eiusmod high life accusamus terry richardson ad squid. Nihil
                             anim keffiyeh helvetica, craft beer labore wes anderson cred
                             nesciunt sapiente ea proident.
          </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="about-us-right-collapse-item mb-3">
                <Button onClick={toggle2} className="d-flex align-items-center">Back End
                <span className="mr-auto">
                    </span>
                    {
                        isOpen2 ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>
                    }

                </Button>
                <Collapse isOpen={isOpen2}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                             enim eiusmod high life accusamus terry richardson ad squid. Nihil
                             anim keffiyeh helvetica, craft beer labore wes anderson cred
                             nesciunt sapiente ea proident.
          </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div className="about-us-right-collapse-item mb-3">
                <Button onClick={toggle3} className="d-flex align-items-center">Full Stack
                <span className="mr-auto">
                    </span>
                    {
                        isOpen3 ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>
                    }

                </Button>
                <Collapse isOpen={isOpen3}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                             enim eiusmod high life accusamus terry richardson ad squid. Nihil
                             anim keffiyeh helvetica, craft beer labore wes anderson cred
                             nesciunt sapiente ea proident.
          </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>

    );
}

export default CollapseExample;