module.exports = {
    secret: "bezkoder-secret-key",
    
    jwtExpiration: 3600,           // 1 hour
    jwtRefreshExpiration: 86400,   // 24 hours
    
  
    /* for test 
    jwtExpiration: 180,          // 3 minute
    jwtRefreshExpiration: 300,  // 5 minutes
    */
  };