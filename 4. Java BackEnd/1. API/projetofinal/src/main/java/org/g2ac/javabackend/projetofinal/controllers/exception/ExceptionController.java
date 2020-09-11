package org.g2ac.javabackend.projetofinal.controllers.exception;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.g2ac.javabackend.projetofinal.exceptions.DeleteException;
import org.g2ac.javabackend.projetofinal.exceptions.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, String>> ValidBadRequest(MethodArgumentNotValidException manve) {

		Map<String, String> errosOcorridos = new HashMap<>();

		List<ObjectError> erros = manve.getBindingResult().getAllErrors();
		for (ObjectError erro : erros) {
			String atributo = ((FieldError) erro).getField();
			String mensagem = erro.getDefaultMessage();
			errosOcorridos.put(atributo, mensagem);
		}
		return ResponseEntity.badRequest()
				.header("error-message", "Não foi possível realizar essa operação")
				.header("error-code", "Operação inválida")
				.body(errosOcorridos);
	}

	@ExceptionHandler(ObjectNotFoundException.class)
	public ResponseEntity<String> ObjetoNotFound(ObjectNotFoundException exception) {
		String mensagem = String.format("Não foi possível localizar o ID %d", exception.getId());
		return ResponseEntity.notFound()
				.header("error-message", mensagem)
				.header("error-code", "Objeto não encontrado")
				.header("error-value", String.valueOf(exception.getId()))
				.build();
	}
	
	@ExceptionHandler(DeleteException.class)
    public ResponseEntity<String> DeleteInvalidoException(DeleteException delete) {
		String mensagem = "Esse usuário possui produtos. Para efetuar a exclusão da conta, por favor, exclua os produtos para que a exclusão seja efetuada.";
		return ResponseEntity.badRequest()
				.header("error-mensage", "Não dá para excluir uma conta com produtos")
				.header("error-code", "Impossível deletar esse usuário")
				.header("error-value", String.valueOf(delete.getId()))
				.body(mensagem);
    }
}
