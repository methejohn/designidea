function TabItem({ children, isActive = false }) {
  return (
    <li>
      <button className={`tab-button ${isActive ? 'active' : ''}`}>
        {children}
      </button>
    </li>
  );
}

export default TabItem;
