const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      {/* Your layout components go here */}
      <footer className="absolute bottom-0 left-0 text-center py-10 bg-red-200 w-full">
        Default footer for Dashboard
      </footer>
    </div>
  );
};

export default RootLayout;
