package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  An attributed name is a name of an entity issued by some attributed naming authority.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class AttributedName extends UcoObject {

  private String namingAuthority;

}