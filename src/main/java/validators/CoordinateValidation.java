package validators;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("validators.CoordinateValidation.java")
public class CoordinateValidation implements Validator {


    @Override
    public void validate(FacesContext facesContext, UIComponent uiComponent, Object value) throws ValidatorException {
        FacesMessage facesMessage;
        double doubleCoordinate = Double.parseDouble(value.toString());
        if (doubleCoordinate <= -21 || doubleCoordinate >= 21) {
            facesMessage = new FacesMessage("Координаты введены неверно");
            facesMessage.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(facesMessage);
        }

    }
}
