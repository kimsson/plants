
import Link from 'next/link'
import Head from 'next/head'
import Menu from './../components/Menu'
import _JSXStyle from "styled-jsx/style"

const layoutStyle = {
  // margin: 20
  // padding: 20,
  // border: '1px solid rgba(0,0,0,0.1)'
}
export default ({ props, children, title = 'This is the default title' }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
    </header>
    <style jsx global>{`

      h1, h2, h3, h4, p, a, li {
        font-family: "Roboto";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: underline;
        color: black;
      }

      a:hover {
        opacity: 0.6;
      }
      .button {
        text-transform:capitalize!important;
        with: 100%!important;
        display: block!important;
      }
      .sensor {
        text-transform:capitalize;
      }
      .footer {
        min-width: 100%;
        text-align: center;
      }
    `}</style>

    { children }

    <footer>
      <p className="footer">Copyright kimsson inc.</p>
    </footer>
  </div>
)
