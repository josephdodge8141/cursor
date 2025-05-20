function processOrder(order) {
    if (!order) throw new Error("Order is required");
  
    if (!order.user || !order.items || order.items.length === 0) {
      throw new Error("Invalid order structure");
    }
  
    let total = 0;
    let hasBackorderedItems = false;
  
    for (let item of order.items) {
      if (!item.price || item.price < 0) {
        throw new Error(`Invalid price for item: ${item.name}`);
      }
  
      if (!item.quantity || item.quantity <= 0) {
        throw new Error(`Invalid quantity for item: ${item.name}`);
      }
  
      if (item.backordered) {
        hasBackorderedItems = true;
      }
  
      if (item.discount) {
        if (item.discount.type === "PERCENT") {
          total += item.price * item.quantity * (1 - item.discount.value / 100);
        } else if (item.discount.type === "FIXED") {
          total += (item.price - item.discount.value) * item.quantity;
        } else {
          throw new Error("Unknown discount type");
        }
      } else {
        total += item.price * item.quantity;
      }
    }
  
    if (order.shipping === "EXPRESS") {
      total += 25;
    } else if (order.shipping === "STANDARD") {
      total += 10;
    } else if (order.shipping === "NONE") {
      total += 0;
    } else {
      throw new Error("Invalid shipping type");
    }
  
    const summary = {
      user: order.user,
      total,
      itemCount: order.items.length,
      hasBackorderedItems,
      estimatedDelivery: hasBackorderedItems ? "2 weeks" : "3-5 days"
    };
  
    if (order.notes && order.notes.length > 300) {
      throw new Error("Order notes too long");
    }
  
    return summary;
  }