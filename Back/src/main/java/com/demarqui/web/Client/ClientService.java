package com.demarqui.web.Client;

import com.demarqui.web.util.MapperUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ClientService {

    @Autowired
    ClientRepository repository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    MapperUtil mapperUtil;

    public ClientDto addClient(Client client){
        Client clientSaved = repository.save(client);
        ClientDto cDto = mapperUtil.mapTo(clientSaved, ClientDto.class);
        return cDto;
    }

}
