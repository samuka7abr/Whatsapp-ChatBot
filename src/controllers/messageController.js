exports.handleIncomingMessage = (req, res) => {
    const message = req.body;
    console.log('Received message:', message);
  
    
    res.status(200).send({ status: 'Message received' });
  };
  