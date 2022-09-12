import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document';

export default class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await NextDocument.getInitialProps(ctx);
      return { ...initialProps };
    }

 render() {
    return (
        <Html lang='en' className='dark'>
            <Head />
            <body className='bg-neutral-100 dark:bg-gray-800 text-gray-800 dark:text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )     
 }
} 