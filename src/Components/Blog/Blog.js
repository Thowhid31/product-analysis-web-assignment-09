import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='faq-container'>
            <div>
            <div>
                <h1>Some FAQ</h1>
            </div>
            <div>
                <h2>Que-01: What is Context API?</h2>
                <p>Ans: This is a way to produce global variables effectively that can be passed around React app. Context Api is the different way or method to 'prop drilling' or moving props from grandparent to child to parent. It returns a consumer and a provider. Here Provider is a component also that as its name gives state to its children. It is very easy to use.</p>
            </div>
            <div>
                <h2>Que-02: What is Semantic Tag</h2>
                <p>Ans: This kind of tag clearly describe their meaning in a human and machine-readable way. Semantic tag is much easier to reload. Also it has greater Accessibility, which is a condition to make a website granted to all. So, this tag (semantic tag) also lead to more consistent code. (article, aside, details, footer, header, main, mark, nav etc.) are semantic tags. </p>
            </div>
            <div>
                <h2>Que-03: What are Inline-Block Elements</h2>
                <p>Ans: Inline Elements: This element appear on the same line as the content and tags beside them. These kind of elements don't start on a new line. Inline elements can actually appear within block elements.
                    <br>
                    </br>
                    Inline-Block: There are no difference between inline and inline-block except they can have padding and margins added on all four sides. Creating navigation links horizontally, is one of common use of it.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Blog;