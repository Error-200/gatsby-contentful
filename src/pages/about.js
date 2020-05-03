import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>Hi! I'm Error. I work with clients to help them create a website that best represents their brand.</p>
            <p><Link to="/contact">Contact Me.</Link></p>
        </Layout>
    )
}

export default AboutPage;
