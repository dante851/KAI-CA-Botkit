module.exports = {
function populateBotResponse(responseId) {
    const verbiage_builder_resp = data.context.session.BotContext.vbResponse;
    let orderIdInput = "";
    let result = verbiage_builder_resp.filter(
      (ele) => ele.RESPONSE_ID === responseId
    );
    //hook to add custom events
    switch (responseId) {
      case "ESI_PHA_ORD_INFO_ASK_ORD_TITLE":
        return result[0].WEB_RESPONSE_MSG;
        
      case "ESI_PHA_ORD_INFO_CNFN_MSG":
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_ASK_ORD_ID":
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_ORD_ID_RESP":
        orderIdInput = context.session.BotUserSession.entity_status;
  
        let str = result[0].WEB_RESPONSE_MSG.replaceAll(
          "${order_status}",
          orderIdInput
        );
        result[0].WEB_RESPONSE_MSG = str;
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_ORD_FALLBACK":
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_ASK_MEMBER_ID":
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_CNFN_ERROR_MSG":
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_MEMBER_ID_RESP":
        let memberIdInput = context.session.BotUserSession.entity_status;
        let memberStr = result[0].WEB_RESPONSE_MSG.replaceAll(
          "${member_status}",
          memberIdInput
        );
        result[0].WEB_RESPONSE_MSG = memberStr;
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_INVALID_MSG":
        return result[0].WEB_RESPONSE_MSG;
  
      case "ESI_PHA_ORD_INFO_MAX_NO_ATTEMPTS_MSG":
        return result[0].WEB_RESPONSE_MSG;
  
      default:
        break;
    }
  }
}
