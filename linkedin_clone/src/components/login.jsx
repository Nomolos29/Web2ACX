import styled from 'styled-components'

const Login = (props) => (
    <Container>
        <Nav>
            <a href='/'>
                <img src='/images/login-logo.svg' />
            </a>
            <div>
                <Join>Join Now</Join>
                <SignIn>Sign In</SignIn>
            </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src="/images/login-hero.svg" alt="" />
            </Hero>
            <Form>
                <Google>
                    <img src="/images/google.svg" alt="" />
                    Sign in with Google
                </Google>
            </Form>
        </Section>
    </Container>
);

const Container = styled.div`
    
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768) {
            padding: 0 5px;
        }
    }
`

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0,0,0, 0.6);
    margin-right: 12px;
    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        transition: all ease 0.5s;
    }
    `;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    padding: 10px 24px;
    border-radius: 24px;
    text-decoration: none;
    font-weight: 600;
    transition-duration: 167ms;
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
    }
`;

const Section = styled.section`
    display: flex;
    min-height: 700px;
    max-width: 1128px;
    width: 100%;
    padding: 70px 0 198px 0;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    align-content: start;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0;
    }
`;

const Hero = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    align-items: center;
    @media ( max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 25px;
        height: auto;
    }
    h1 {
        width: 55%;
        margin-top: -150px;
        margin-bottom: 50px;
        font-size: 54px;
        color: #2977c9;
        font-weight: 400;
        line-height: 5rem;
        @media ( max-width: 768px) {
            width: 93%;
            text-align: center;
            font-size: 36px;
            line-height: 3rem;
            margin: 0;
        }
    }
    img {
        width: 55%;
        margin-right: -200px;
        @media (max-width: 768px) {
            margin: 0px;
            width: 85%;
        }
    }
`;

const Form = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    @media (max-width: 768px) {
        display: flex;
        position: relative;
        justify-content: center;
        margin-top: 30px;
    }
    img {
        height: 70%;
    }
`;

const Google = styled.button`
    width: 35%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 26px;
    background-color: #fff;
    font-size: 20px;
    transition-duration: 0.2s;
    color: rgba(0,0,0, 0.6);
    @media (max-width: 768px) {
        width: 85%;
    }
`;

export default Login