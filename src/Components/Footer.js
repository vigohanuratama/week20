import {Row,Container, Col} from 'reactstrap'
import './Footer.css'
const Footer = () =>{
    return(
        <div>
            <footer className="mt-5 rubik bg-white">
                <Container fluid="md">
                    <Row>
                        <Col lg='8' md='7' sm='12' className=" pt-3 ps-5" >
                            <div className="d-flex">
                                <img src='https://drive.google.com/uc?id=1yJHjPjjw7DYfmxY69ia9wZTlZ2CqipIY' alt="" width="20" height="23" className="d-inline-block align-text-top me-2" />
                                <h5>Coffee Shop</h5>
                            </div>
                            <p className="fwbold">
                                Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
                            </p>
                            <ul className="d-flex list-unstyled">
                                <li className="me-2">
                                    <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8 0.224609C7.5215 0.224609 0 7.74611 0 17.0246C0 26.3031 7.5215 33.8246 16.8 33.8246C26.0785 33.8246 33.6 26.3031 33.6 17.0246C33.6 7.74611 26.0785 0.224609 16.8 0.224609ZM20.7795 11.8341H18.2543C17.955 11.8341 17.6225 12.2279 17.6225 12.7511V14.5746H20.7813L20.3035 17.1751H17.6225V24.9819H14.6423V17.1751H11.9385V14.5746H14.6423V13.0451C14.6423 10.8506 16.1648 9.06736 18.2543 9.06736H20.7795V11.8341Z" fill="#FFBA33"/>
                                    </svg>
                                </li>
                                <li className="me-2">
                                    <svg width="25" height="24" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3996 0.224609C8.12111 0.224609 0.599609 7.74611 0.599609 17.0246C0.599609 26.3031 8.12111 33.8246 17.3996 33.8246C26.6781 33.8246 34.1996 26.3031 34.1996 17.0246C34.1996 7.74611 26.6781 0.224609 17.3996 0.224609ZM24.2334 13.9866C24.2404 14.1301 24.2421 14.2736 24.2421 14.4136C24.2421 18.7886 20.9154 23.8304 14.8289 23.8304C13.0304 23.8334 11.2693 23.3168 9.75736 22.3429C10.0146 22.3744 10.2789 22.3866 10.5466 22.3866C12.0971 22.3866 13.5234 21.8599 14.6556 20.9709C13.9656 20.9573 13.297 20.7288 12.7431 20.3173C12.1891 19.9057 11.7773 19.3316 11.5651 18.6749C12.0606 18.7691 12.5711 18.7493 13.0579 18.6171C12.3089 18.4657 11.6355 18.0599 11.1516 17.4685C10.6677 16.8772 10.4033 16.1367 10.4031 15.3726V15.3324C10.8494 15.5791 11.3604 15.7296 11.9029 15.7471C11.2008 15.2797 10.7037 14.5618 10.5134 13.7401C10.3231 12.9184 10.454 12.0551 10.8791 11.3266C11.7103 12.3486 12.7468 13.1847 13.9216 13.7807C15.0964 14.3766 16.3833 14.7193 17.6989 14.7864C17.5316 14.0764 17.6036 13.3311 17.9036 12.6662C18.2037 12.0014 18.7149 11.4543 19.358 11.1101C20.001 10.7658 20.7398 10.6436 21.4594 10.7625C22.1791 10.8814 22.8393 11.2348 23.3374 11.7676C24.0779 11.6211 24.7881 11.3495 25.4374 10.9644C25.1905 11.7311 24.6738 12.3822 23.9831 12.7966C24.6391 12.7176 25.2796 12.5412 25.8836 12.2734C25.44 12.9382 24.8811 13.5184 24.2334 13.9866Z" fill="#FFBA33"/>
                                    </svg>
                                </li>
                                <li className="me-2">
                                    <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.2502 17.0246C22.2502 18.417 21.6971 19.7524 20.7125 20.7369C19.7279 21.7215 18.3926 22.2746 17.0002 22.2746C15.6078 22.2746 14.2725 21.7215 13.2879 20.7369C12.3033 19.7524 11.7502 18.417 11.7502 17.0246C11.7502 16.7254 11.7817 16.4331 11.8359 16.1496H10.0002V23.1444C10.0002 23.6309 10.3939 24.0246 10.8804 24.0246H23.1217C23.3549 24.0241 23.5783 23.9312 23.743 23.7662C23.9077 23.6011 24.0002 23.3775 24.0002 23.1444V16.1496H22.1644C22.2187 16.4331 22.2502 16.7254 22.2502 17.0246ZM17.0002 20.5246C17.4599 20.5245 17.9152 20.4338 18.3399 20.2578C18.7646 20.0817 19.1504 19.8238 19.4754 19.4986C19.8004 19.1734 20.0582 18.7874 20.234 18.3627C20.4099 17.9379 20.5003 17.4826 20.5002 17.0229C20.5001 16.5631 20.4094 16.1079 20.2334 15.6832C20.0573 15.2585 19.7994 14.8726 19.4742 14.5476C19.149 14.2226 18.763 13.9648 18.3382 13.789C17.9135 13.6132 17.4582 13.5227 16.9984 13.5229C16.07 13.5231 15.1796 13.8922 14.5232 14.5489C13.8668 15.2056 13.4982 16.0961 13.4984 17.0246C13.4987 17.9531 13.8677 18.8435 14.5244 19.4998C15.1812 20.1562 16.0717 20.5248 17.0002 20.5246ZM21.2002 13.3496H23.2984C23.4378 13.3496 23.5716 13.2944 23.6703 13.1959C23.769 13.0975 23.8247 12.964 23.8252 12.8246V10.7264C23.8252 10.5867 23.7697 10.4527 23.6709 10.3539C23.5721 10.2551 23.4382 10.1996 23.2984 10.1996H21.2002C21.0605 10.1996 20.9265 10.2551 20.8277 10.3539C20.7289 10.4527 20.6734 10.5867 20.6734 10.7264V12.8246C20.6752 13.1134 20.9114 13.3496 21.2002 13.3496ZM17.0002 0.224609C12.5446 0.224609 8.27141 1.9946 5.1208 5.14522C1.97019 8.29583 0.200195 12.569 0.200195 17.0246C0.200195 21.4802 1.97019 25.7534 5.1208 28.904C8.27141 32.0546 12.5446 33.8246 17.0002 33.8246C19.2064 33.8246 21.391 33.3901 23.4293 32.5458C25.4676 31.7015 27.3196 30.464 28.8796 28.904C30.4396 27.344 31.6771 25.492 32.5214 23.4537C33.3657 21.4154 33.8002 19.2308 33.8002 17.0246C33.8002 14.8184 33.3657 12.6338 32.5214 10.5955C31.6771 8.55726 30.4396 6.70524 28.8796 5.14522C27.3196 3.58519 25.4676 2.34771 23.4293 1.50343C21.391 0.659154 19.2064 0.224609 17.0002 0.224609ZM25.7502 23.8304C25.7502 24.8996 24.8752 25.7746 23.8059 25.7746H10.1944C9.1252 25.7746 8.2502 24.8996 8.2502 23.8304V10.2189C8.2502 9.14961 9.1252 8.27461 10.1944 8.27461H23.8059C24.8752 8.27461 25.7502 9.14961 25.7502 10.2189V23.8304Z" fill="#FFBA33"/>
                                    </svg>
                                </li>
                            </ul>
                            <p>©2020CoffeeStore</p>
                        </Col>
                        <Col lg='4' md='5' sm='12' className=" d-flex pt-3 ps-5">
                            <ul className="me-2 list-unstyled me-5 list">
                                <p className="fw-bold">Product</p>
                                <li>Download </li>
                                <li>Pricing</li>
                                <li>Locations</li>
                                <li>Countries</li>
                                <li>Blog</li>
                            </ul>
                            <ul className="me-2  list-unstyled list">
                                <p className="fw-bold">Engage</p>
                                <li>Coffee Shop ?</li>
                                <li>FAQ</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                
                
            </footer>
        </div>
    )
}
export default Footer