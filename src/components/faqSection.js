import React from 'react';
import styled from 'styled-components';
import {About} from "../style";
import Toggle from "./toggle";
import {AnimateSharedLayout} from "framer-motion/dist/framer-motion";
import {UseScroll} from "./useScroll";
import {scrollReveal} from "../animation";

const FaqSection = () => {
    const [element, controls] = UseScroll();
    return (
        <Faq
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial='hidden'
        >
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
            <Toggle title='How Do I Start?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto assumenda
                        doloremque ut veritatis voluptate? Culpa exercitationem necessitatibus quibusdam unde!</p>
                </div>
            </Toggle>
            <Toggle title='Daily Schedule'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur commodi deleniti
                        deserunt
                        nobis, obcaecati perferendis porro quibusdam repellendus sequi sit, voluptatibus! Aut
                        dolorum
                        eos
                        quam qui, rem sit voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores autem culpa
                        deserunt
                        distinctio dolorem doloremque error, libero omnis optio praesentium quam quis quo sed sequi
                        sint
                        unde? Aspernatur.</p>
                </div>
            </Toggle>
            <Toggle title='Different Payment Methods'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur commodi deleniti deserunt
                        nobis, obcaecati perferendis porro quibusdam repellendus sequi sit, voluptatibus! Aut dolorum
                        eos
                        quam qui, rem sit voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores autem culpa
                        deserunt
                        distinctio dolorem doloremque error, libero omnis optio praesentium quam quis quo sed sequi sint
                        unde? Aspernatur.</p>
                </div>
            </Toggle>
            <Toggle title='What Products Do You Offer?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur commodi deleniti deserunt
                        nobis, obcaecati perferendis porro quibusdam repellendus sequi sit, voluptatibus! Aut dolorum
                        eos
                        quam qui, rem sit voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores autem culpa
                        deserunt
                        distinctio dolorem doloremque error, libero omnis optio praesentium quam quis quo sed sequi sint
                        unde? Aspernatur.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
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