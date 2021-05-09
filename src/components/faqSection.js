import React from 'react';
import styled from 'styled-components';
import {About} from "../style";

const FaqSection = () => {
    return (
        <Faq>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <div className="question">
                <div className="answer">
                    <h4>How Do I Start?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur commodi deleniti deserunt
                        nobis, obcaecati perferendis porro quibusdam repellendus sequi sit, voluptatibus! Aut dolorum
                        eos
                        quam qui, rem sit voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores autem culpa
                        deserunt
                        distinctio dolorem doloremque error, libero omnis optio praesentium quam quis quo sed sequi sint
                        unde? Aspernatur.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <div className="answer">
                    <h4>Daily Schedule</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur commodi deleniti deserunt
                        nobis, obcaecati perferendis porro quibusdam repellendus sequi sit, voluptatibus! Aut dolorum
                        eos
                        quam qui, rem sit voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores autem culpa
                        deserunt
                        distinctio dolorem doloremque error, libero omnis optio praesentium quam quis quo sed sequi sint
                        unde? Aspernatur.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <div className="answer">
                    <h4>Different Payment Methods</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur commodi deleniti deserunt
                        nobis, obcaecati perferendis porro quibusdam repellendus sequi sit, voluptatibus! Aut dolorum
                        eos
                        quam qui, rem sit voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores autem culpa
                        deserunt
                        distinctio dolorem doloremque error, libero omnis optio praesentium quam quis quo sed sequi sint
                        unde? Aspernatur.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <div className="answer">
                    <h4>What Products Do You Offer?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur commodi deleniti deserunt
                        nobis, obcaecati perferendis porro quibusdam repellendus sequi sit, voluptatibus! Aut dolorum
                        eos
                        quam qui, rem sit voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores autem culpa
                        deserunt
                        distinctio dolorem doloremque error, libero omnis optio praesentium quam quis quo sed sequi sint
                        unde? Aspernatur.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem  0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
    }
    p {
        padding: 1rem 0rem;
    }
`;

export default FaqSection;