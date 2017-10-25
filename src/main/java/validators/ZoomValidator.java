package validators;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("validators.ZoomValidator")
public class ZoomValidator implements Validator{
    @Override
    public void validate(FacesContext facesContext, UIComponent uiComponent, Object value) throws ValidatorException {
        FacesMessage facesMessage;
        double zoomCoordinate = Double.parseDouble(value.toString());
        if (zoomCoordinate <= 10 || zoomCoordinate >= 20) {
            facesMessage = new FacesMessage("Радиус введен неверно");
            facesMessage.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(facesMessage);
        }
    }
}
