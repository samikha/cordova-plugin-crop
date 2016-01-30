#import <Cordova/CDVPlugin.h>
#import "PECropViewController.h"

@interface CTCrop : CDVPlugin <PECropViewControllerDelegate>
- (void) cropImage:(CDVInvokedUrlCommand *) command;
- (void) cropImageFixedRatio800x600:(CDVInvokedUrlCommand *) command;
@end
