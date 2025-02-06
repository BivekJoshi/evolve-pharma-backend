const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      if (!req.auth_user || !allowedRoles.includes(req.auth_user.role)) {
        return res.status(403).json({ msg: "Access Denied" });
      }
      next();
    };
  };
  
  // Predefined Middlewares
  const isAdmin = authorizeRoles("ADMIN");
  const isSuperAdmin = authorizeRoles("SUPER_ADMIN");
  const isManager = authorizeRoles("MANAGER");
  const isCustomer = authorizeRoles("CUSTOMER");
  const isAdminOrSeller = authorizeRoles("ADMIN", "SELLER");
  
  module.exports = { authorizeRoles, isAdmin, isSuperAdmin, isManager, isCustomer, isAdminOrSeller };
  