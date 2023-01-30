import Nav from './nav';

type LayoutProps = {
    children: React.ReactNode,
};
export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    );
}