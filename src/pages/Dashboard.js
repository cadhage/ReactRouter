const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
