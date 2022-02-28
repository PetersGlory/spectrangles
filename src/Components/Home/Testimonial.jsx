import React from "react"
import userOne from "../../assets/images/user.png"
import userTwo from "../../assets/images/user3.png"
import userThree from "../../assets/images/user2.png"
import userFour from "../../assets/images/user1.png"
import userFive from "../../assets/images/userl.png"

export const Testimonial = ()=>{
    return(
        <>
            <div className="testimonials">
                <div className="card">
                    <small>“</small>
                    <p>We had an incredible experience working with Spectrangle and we’re impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
                </div>
                <div className="clients">
                    <img src={userOne} className="user1" alt="Gallery" />
                    <img src={userTwo} className="user2" alt="Gallery" />
                    <div className="users">
                        <img src={userThree} className="user3" alt="Gallery" />
                        <p className="p">
                            <p>John Snow</p>
                            <small>CEO, Woofs Corporation</small>
                        </p>
                    </div>
                    <img src={userFour} className="user4" alt="Gallery" />
                    <img src={userFive} className="user5" alt="Gallery" />
                </div>
                
            </div>
        </>
    )
}