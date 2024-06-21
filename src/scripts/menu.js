document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });

export default function MarkdownPostLayout({ children, ...props }) {
  console.log('MarkdownPostLayout props:', props);
  return (
    <div>
      {children}
    </div>
  );
}