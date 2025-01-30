export class RoutingService {
    constructor() {}
    async navigateToLocation(locationArray = [], appName) {
        const IMAGE_CREATOR = "image-creator";

       if (locationArray.length === 0 || locationArray[0] === IMAGE_CREATOR) {
            const pageUrl = `${assistOS.space.id}/${appName}/${IMAGE_CREATOR}`;
            await assistOS.UI.changeToDynamicPage(IMAGE_CREATOR, pageUrl);
            return;
        }
         if(locationArray[locationArray.length-1]!== IMAGE_CREATOR){
         console.error(`Invalid URL: URL must end with ${IMAGE_CREATOR}`);
            return;
        }
        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${assistOS.space.id}/${appName}/${locationArray.join("/")}`;
        await assistOS.UI.changeToDynamicPage(webComponentName, pageUrl);
    }
}
