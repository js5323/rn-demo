# RN Demo

## qna

### After add Navigation Stack, got error: Invariant Violation: requireNativeComponent: "RNSScreenStackHeaderConfig" was not found in the UIManager.

  resolve by stop npm run start and run npm run android;
  I'm not in the Mac system, so i skip the mac step  
  
  If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.   
  `npx pod-install ios`
  
  Run start is for both ios and android system, i skip the pod-install which result the error.
